
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
    selectedAchievement: Achievement | null, // Изменил на null для начального состояния
    isOpenSelectedAchievement: boolean
}

const initialState: AddAchievementSliceSliceTypes = {
    message: "",
    isOpenModalAchievements: false,
    loading: false,
    error: null,
    achievements: [],
    lastId: 0,
    selectedAchievement: null, // Начальное значение null
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
            // Обновляем lastId до максимального значения
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
        }
    },
});

export const {
    setOpenModalAchievements,
    setAchievements,
    addAchievement,
    selectAchievement,
    closeAchievement
} = AddAchievementSliceSlice.actions;
export default AddAchievementSliceSlice.reducer;
/* import {
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
    selectedAchievement: Achievement
    isOpenSelectedAchievement: boolean
}

const initialState: AddAchievementSliceSliceTypes = {
    message: "",
    isOpenModalAchievements: false,

    loading: false,
    error: null,
    achievements: [],
    lastId: 0,
    selectedAchievement: {
        logo: '',
        title: '',
        date: ''
    },
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

            console.log("pay", action.payload)
            const achiv = action.payload.map((item, index) => {
                return { ...item, id: index }
            })
            console.log("ac", achiv)
            state.achievements = achiv
        },


        addAchievement(state, action: PayloadAction<Achievement>) {
            state.achievements.push(action.payload)
        },


        selectAchievement(state, action: PayloadAction<number>) {
            //   state.selectedAchievement = action.payload
            state.isOpenSelectedAchievement = true

            //   console.log("id", action.payload, state.achievements)
        },
        closeAchievement(state) {
            state.selectedAchievement = {  logo: '', title: '',  date: '' }
                state.isOpenSelectedAchievement = false
        }

    },


});

export const {
    setOpenModalAchievements,
    setAchievements,
    addAchievement,
    selectAchievement,
    closeAchievement

} = AddAchievementSliceSlice.actions;
export default AddAchievementSliceSlice.reducer;
 */