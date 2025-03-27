import AIweekAP01 from  '/images/eventImages/AIWeekActivityPlan01.JPG?url';
import AIweekAP02 from '/images/eventImages/AIWeekActivityPlan02.JPG?url';
import AIweekAP03 from '/images/eventImages/AIWeekActivityPlan03.JPG?url';
import AIweekAP04 from '/images/eventImages/AIWeekActivityPlan04.JPG?url';
import AIweekAP05 from '/images/eventImages/AIWeekActivityPlan05.JPG?url';
import AIweekAP06 from '/images/eventImages/AIWeekActivityPlan06.JPG?url';

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