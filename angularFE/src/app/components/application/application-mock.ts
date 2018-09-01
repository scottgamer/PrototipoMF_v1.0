import { Application } from '../../models/application-model';

export const APPLICATIONS: Application[] = [
    {
        name: 'Aplicacion demo 1',
        logo: 'assets/images/logos/app1.webp',
        imgs: ['assets/images/carousel/ca1.webp', 'assets/images/carousel/ca2.webp', 'assets/images/carousel/ca3.webp'],
        category: 'Baja visión',
        description: 'Eye-D (Acronym for Eye Devices), conceptualized as standalone solution to improve quality of life' +
            ' of visually impaired (VI) is a complete solution that assists VI’s in their daily life.' +
            'Eye-D helps visually impaired be location aware, explore and navigate to nearby places of interest, ' +
            'evaluate surroundings with their smartphone camera and read printed text. Eye-D will serve as the true ' +
            'companion for most of your daily assistance needs.' +
            'Trusted and supported by thousands of people across the globe Eye-D is determined to make visually ' +
            'impaired truly independent in all aspect and help them contribute to the society by propelling inclusion.' +
            'What’s under the hood and how it helps?',
        rating: 3,
        country: 'España',
        developedBy: 'Desarrollador',
        version: 1.1,
        releaseDate: 'dd/mm/aaaa',
        platform: 'Móvil',
        androidMin: 'Android 4.0 kitkat',
        appWebPage: 'www.web-aplicacion.com',
        commentaries: [{
            user: 'Usuario123',
            commentary: 'Comentario de prueba',
            date: '8/30/2018',
            rating: 2,
        },
        {
            user: 'Usuario567',
            commentary: 'Comentario de prueba',
            date: '10/30/2018',
            rating: 5,
        }],
    },
    {
        name: 'Aplicacion demo 2',
        logo: 'assets/images/logos/app2.webp',
        imgs: ['assets/images/carousel/ca1.webp', 'assets/images/carousel/ca2.webp', 'assets/images/carousel/ca3.webp'],
        category: 'Baja visión',
        description: 'Eye-D (Acronym for Eye Devices), conceptualized as standalone solution to improve quality of life' +
            ' of visually impaired (VI) is a complete solution that assists VI’s in their daily life.' +
            'Eye-D helps visually impaired be location aware, explore and navigate to nearby places of interest, ' +
            'evaluate surroundings with their smartphone camera and read printed text. Eye-D will serve as the true ' +
            'companion for most of your daily assistance needs.' +
            'Trusted and supported by thousands of people across the globe Eye-D is determined to make visually ' +
            'impaired truly independent in all aspect and help them contribute to the society by propelling inclusion.' +
            'What’s under the hood and how it helps?',
        rating: 3,
        country: 'España',
        developedBy: 'Desarrollador',
        version: 1.1,
        releaseDate: 'dd/mm/aaaa',
        platform: 'Móvil',
        androidMin: 'Android 4.0 kitkat',
        appWebPage: 'www.web-aplicacion.com',
        commentaries: [{
            user: 'Usuario123',
            commentary: this.lorem,
            date: '8/30/2018',
            rating: 2,
        },
        {
            user: 'Usuario567',
            commentary: this.lorem,
            date: '10/30/2018',
            rating: 5,
        }],
    },
    {
        name: 'Aplicacion demo 3',
        logo: 'assets/images/logos/app3.webp',
        imgs: ['assets/images/carousel/ca1.webp', 'assets/images/carousel/ca2.webp', 'assets/images/carousel/ca3.webp'],
        category: 'Baja visión',
        description: 'Eye-D (Acronym for Eye Devices), conceptualized as standalone solution to improve quality of life' +
            ' of visually impaired (VI) is a complete solution that assists VI’s in their daily life.' +
            'Eye-D helps visually impaired be location aware, explore and navigate to nearby places of interest, ' +
            'evaluate surroundings with their smartphone camera and read printed text. Eye-D will serve as the true ' +
            'companion for most of your daily assistance needs.' +
            'Trusted and supported by thousands of people across the globe Eye-D is determined to make visually ' +
            'impaired truly independent in all aspect and help them contribute to the society by propelling inclusion.' +
            'What’s under the hood and how it helps?',
        rating: 3,
        country: 'España',
        developedBy: 'Desarrollador',
        version: 1.1,
        releaseDate: 'dd/mm/aaaa',
        platform: 'Móvil',
        androidMin: 'Android 4.0 kitkat',
        appWebPage: 'www.web-aplicacion.com',
        commentaries: [{
            user: 'Usuario123',
            commentary: this.lorem,
            date: '8/30/2018',
            rating: 2,
        },
        {
            user: 'Usuario567',
            commentary: this.lorem,
            date: '10/30/2018',
            rating: 5,
        }],
    }

];