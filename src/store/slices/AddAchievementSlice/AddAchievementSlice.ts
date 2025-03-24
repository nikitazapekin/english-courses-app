
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

interface Achievement {
    logo: string,
    title: string,
    date: string,
    id?: number
}

interface AddAchievementSliceSliceTypes {
    message: string
    loading: boolean,
    error: null | string,
    isOpenModalAchievements: boolean,
    achievements: Achievement[],
    lastId: number,
    selectedAchievement: Achievement | null, 
    isOpenSelectedAchievement: boolean
}

const initialState: AddAchievementSliceSliceTypes = {
    message: "",
    isOpenModalAchievements: false,
    loading: false,
    error: null,
    achievements: [],
    lastId: 0,
    selectedAchievement: null,  
    isOpenSelectedAchievement: false
};

const AddAchievementSliceSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setOpenModalAchievements(state) {
            state.isOpenModalAchievements = !state.isOpenModalAchievements
        },

        setAchievements(state, action: PayloadAction<Achievement[]>) {
            const achiv = action.payload.map((item, index) => {
                return { ...item, id: item.id !== undefined ? item.id : index }
            });
            state.achievements = achiv;
        
            if (achiv.length > 0) {
                state.lastId = Math.max(...achiv.map(a => a.id || 0));
            }
        },

        addAchievement(state, action: PayloadAction<Achievement>) {
            const newId = state.lastId + 1;
            const achievementWithId = { ...action.payload, id: newId };
            state.achievements.push(achievementWithId);
            state.lastId = newId;
        },

        selectAchievement(state, action: PayloadAction<number>) {
            const achievementId = action.payload;
            const foundAchievement = state.achievements.find(ach => ach.id === achievementId);
            
            if (foundAchievement) {
                state.selectedAchievement = foundAchievement;
                state.isOpenSelectedAchievement = true;

                console.log("SELECT", state.selectedAchievement.title)
            } else {
                console.error(`Achievement with id ${achievementId} not found`);
                state.selectedAchievement = null;
                state.isOpenSelectedAchievement = false;
            }
        },

        closeAchievement(state) {
            state.selectedAchievement = null;
            state.isOpenSelectedAchievement = false;
        }, 

     /*    updateAchievement(state, action: PayloadAction<Achievement>) {

        } */


     updateAchievement(state, action: PayloadAction<{currentTitle: string; updatedData: Achievement}>) {
        const { currentTitle, updatedData } = action.payload;
        
        // Находим индекс достижения с указанным currentTitle
        const achievementIndex = state.achievements.findIndex(
            ach => ach.title === currentTitle
        );
    
        if (achievementIndex !== -1) {
            // Обновляем найденное достижение
            state.achievements[achievementIndex] = {
                ...state.achievements[achievementIndex],
                ...updatedData
            };
    
            // Если обновляли выбранное достижение, обновляем и его
            if (state.selectedAchievement?.title === currentTitle) {
                state.selectedAchievement = {
                    ...state.selectedAchievement,
                    ...updatedData
                };
            }
        } else {
            console.error(`Achievement with title "${currentTitle}" not found`);
        }
    }

    
    },
});

export const {
    setOpenModalAchievements,
    setAchievements,
    addAchievement,
    selectAchievement,
    closeAchievement,
    updateAchievement
} = AddAchievementSliceSlice.actions;
export default AddAchievementSliceSlice.reducer; 