import AIweekAP01 from '../assets/eventImages/AIWeekActivityPlan01.jpg'
import AIweekAP02 from '../assets/eventImages/AIWeekActivityPlan02.jpg'
import AIweekAP03 from '../assets/eventImages/AIWeekActivityPlan03.jpg'
import AIweekAP04 from '../assets/eventImages/AIWeekActivityPlan04.jpg'
import AIweekAP05 from '../assets/eventImages/AIWeekActivityPlan05.jpg'
import AIweekAP06 from '../assets/eventImages/AIWeekActivityPlan06.jpg'

export interface Gallery{
    id: number,
    image: string,
}

const gallery: Gallery[] = [
    {
        id: 1,
        image: AIweekAP01,
    },
    {
        id: 2,
        image: AIweekAP02,
    },
    {
        id: 3,
        image: AIweekAP03,
    },
    {
        id: 4,
        image: AIweekAP04,
    },
    {
        id: 5,
        image: AIweekAP05,
    },
    {
        id: 6,
        image: AIweekAP06,
    }
]

export {gallery};