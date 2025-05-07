import AIweekAP01 from  '/images/eventImages/AIWeekActivityPlan01.JPG?url';
import AIweekAP02 from '/images/eventImages/AIWeekActivityPlan02.JPG?url';
import AIweekAP03 from '/images/eventImages/AIWeekActivityPlan03.JPG?url';
import AIweekAP04 from '/images/eventImages/AIWeekActivityPlan04.JPG?url';
import AIweekAP05 from '/images/eventImages/AIWeekActivityPlan05.JPG?url';
import AIweekAP06 from '/images/eventImages/AIWeekActivityPlan06.JPG?url';

import screenshot211846 from '/images/eventImages/Screenshot_20250327_211846_LinkedIn.jpg';
import screenshot211908 from '/images/eventImages/Screenshot_20250327_211908_LinkedIn.jpg';
import screenshot212041 from '/images/eventImages/Screenshot_20250327_212041_LinkedIn.jpg';
import screenshot212110 from '/images/eventImages/Screenshot_20250327_212110_LinkedIn.jpg';
import screenshot212145 from '/images/eventImages/Screenshot_20250327_212145_LinkedIn.jpg';
import screenshot212128 from "/images/eventImages/Screenshot_20250327_212128_LinkedIn.jpg";

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
    },
    {
        id: 7,
        image: screenshot211846,
    },
    {
        id: 8,
        image: screenshot211908,
    },
    {
        id: 9,
        image: screenshot212041,
    },
    {
        id: 10,
        image: screenshot212110,
    },
    {
        id: 11,
        image: screenshot212128,
    },
    {
        id: 12,
        image: screenshot212145,
    },

]

export {gallery};