'use client';

import Link from "next/link";
import styles from "./styles.module.css";
import MealsGrid from "@/components/MealsGrid/MealsGrid";
import {  useAppSelector } from "@/lib/hooks";

const Meals = () => {
    const meals = useAppSelector((state) => state.meals.meals);

    return (
        <>
            <header className={styles.header}>
                <h1>Delicious meals, created {' '}
                    <span className={styles.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}

export default Meals;