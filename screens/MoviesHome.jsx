import { MovieContext } from 'pages';
import React, { useContext } from 'react';

import styles from '@/styles/screenStyles/MoviesHome.module.scss';
import Image from 'next/image';
import { Play, Plus } from '@/public/assets';

export const MoviesHome = () => {

    const { movies, popularMovies } = useContext(MovieContext);

    const { original_title } = movies[0];
    console.log(original_title);
    const background = movies[0].poster_path.original;

    const css = `
        #background {
            background-image: url(${background});
        }
    `;

    return (
        <section id='background' className={`h-screen flex justify-center items-center bg-image-props transition-700-in-out ${styles.background}`}>
            <style>{css}</style>

            <div className='flex flex-wrap w-50 gap-7 xs:justify-center md:justify-start absolute xs:bottom-[calc(30%)] sm:bottom-[calc(20%)] md:bottom-[calc(15%)] md:left-[4em]'>
                <p className='text-white-lighter font-oswald uppercase tracking-superWide'>original de liteflix</p>
                <h1 className='w-full h1-xxl-aqua md:mb-4 font-bebas uppercase'>{original_title}</h1>
                <button className='btn-liteflix'>
                    <Image src={Play} alt='add movie' />
                    reproducir
                </button>
                <button className='btn-liteflix-border'>
                    <Image src={Plus} alt='add movie' />
                    mi lista
                </button>
            </div>
        </section>
    );
};
