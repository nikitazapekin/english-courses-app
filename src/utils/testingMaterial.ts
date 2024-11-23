
interface testingMaterialsTypes {
    id: number;
    lesson: number;
    title: string;
    time: ""
  
    tasks: {
        sentance: string,
        answers: {
            text: string,
            isTrue: boolean
        }[]
    }[];
}


export const testingMaterial: testingMaterialsTypes[] = [

]