import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div
            className="page-container"
            style={{
                backgroundImage: "url('/images/bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Nuages réalistes en fond éparpillés */}

            {/* Nuage 1: Grand et lent à gauche */}
            <motion.img
                src="/images/cloud.svg"
                style={{ position: 'absolute', top: '0%', left: '0%', width: '450px', zIndex: 1, opacity: 0.95 }}
                animate={{ x: [0, 60, -30, 0] }}
                transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
            />

            {/* Nuage 2: Moyen, rapide à droite */}
            <motion.img
                src="/images/cloud.svg"
                style={{ position: 'absolute', top: '2%', right: '2%', width: '400px', zIndex: 1, opacity: 0.95 }}
                animate={{ x: [0, -40, 20, 0] }}
                transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 2 }}
            />

            {/* Nuage 3: Assez grand au centre */}
            <motion.img
                src="/images/cloud.svg"
                style={{ position: 'absolute', top: '-1%', left: '30%', width: '260px', zIndex: 1, opacity: 0.95 }}
                animate={{ x: [0, 45, -25, 0] }}
                transition={{ repeat: Infinity, duration: 28, ease: "easeInOut", delay: 5 }}
            />

            {/* Nuage 4: Assez grand au centre à droite */}
            <motion.img
                src="/images/cloud.svg"
                style={{ position: 'absolute', top: '4%', left: '58%', width: '280px', zIndex: 1, opacity: 0.95 }}
                animate={{ x: [0, 45, -25, 0] }}
                transition={{ repeat: Infinity, duration: 28, ease: "easeInOut", delay: 5 }}
            />

            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                className="title-container title-glow"
            >
                <h1 className="main-title" style={{ marginBottom: 0 }}>Bienvenue dans l'Univers d'Helmouth !</h1>
            </motion.div>

            <div className="characters-scene">
                {/* Les parents Mammouth */}
                <motion.img
                    src="/images/parents_t.png"
                    alt="Parents Helmouth"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="character-img img-parents"
                />

                {/* Les mammoutheaux (Les bébés) */}
                <motion.img
                    src="/images/mammoutheaux_t.png"
                    alt="Mammoutheaux"
                    animate={{ y: [0, -7, 0] }}
                    transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 1 }}
                    className="character-img img-mammoutheaux"
                />

                {/* Le mammouth Helmouth */}
                <motion.img
                    src="/images/helmouth_t.png"
                    alt="Helmouth"
                    style={{ scaleX: -1 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.2 }}
                    className="character-img img-helmouth"
                />

                {/* L'oiseau Picpic qui vole */}
                <motion.img
                    src="/images/picpic_t.png"
                    alt="Picpic"
                    animate={{ y: [0, -30, 0], x: [0, 15, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                    className="character-img img-picpic"
                />

                {/* L'écureuil */}
                <motion.img
                    src="/images/ecureuil_t.png"
                    alt="Ecureuil"
                    animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.3 }}
                    className="character-img img-ecureuil"
                />

                {/* Le porc-épic */}
                <motion.img
                    src="/images/porc_epic_v4_t.png"
                    alt="Porc-épic"
                    animate={{ y: [0, -8, 0], rotate: [0, -3, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.8 }}
                    className="character-img img-porcepic"
                />

                {/* Le singe entraîneur */}
                <motion.img
                    src="/images/singe_v4_t.png"
                    alt="Singe"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.1 }}
                    className="character-img img-singe"
                />
            </div>

            <motion.button
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9 }}
                className="primary-button bouncy-button"
                onClick={() => navigate('/selection')}
                style={{ zIndex: 10, marginTop: '1rem' }}
            >
                Choisir une histoire 📖
            </motion.button>
        </div>
    );
}
