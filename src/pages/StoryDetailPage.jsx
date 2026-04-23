import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function StoryDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const getTitle = () => {
        if (id === '1') return "La moumoute du mammouth Helmouth";
        if (id === '3') return "Le mammouth Helmouth joue au foot";
        return "Choisis l'émotion de l'histoire";
    };

    return (
        <div
            className="page-container"
            style={{
                backgroundImage: "url('/web-app-histoires/images/bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Nuages réalistes en fond éparpillés */}
            {/* Nuage 1: Grand et lent à gauche */}
            <motion.img
                src="/web-app-histoires/images/cloud.svg"
                style={{ position: 'absolute', top: '0%', left: '0%', width: '450px', zIndex: 1, opacity: 0.95 }}
                animate={{ x: [0, 60, -30, 0] }}
                transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
            />

            {/* Nuage 2: Moyen, rapide à droite */}
            <motion.img
                src="/web-app-histoires/images/cloud.svg"
                style={{ position: 'absolute', top: '2%', right: '2%', width: '400px', zIndex: 1, opacity: 0.95 }}
                animate={{ x: [0, -40, 20, 0] }}
                transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 2 }}
            />

            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="title-container title-glow"
                style={{ zIndex: 10, marginTop: '-1rem', marginBottom: '4rem' }}
            >
                <h1 className="main-title" style={{ marginBottom: 0 }}>{getTitle()}</h1>
            </motion.div>

            <div className="cards-container" style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="primary-button bouncy-button"
                    style={{ fontSize: '2rem', padding: '1.5rem 3rem' }}
                    onClick={() => navigate(`/video/${id}?emotion=avec`)}
                >
                    Avec émotion 😄
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="secondary-button bouncy-button"
                    style={{ fontSize: '2rem', padding: '1.5rem 3rem' }}
                    onClick={() => navigate(`/video/${id}?emotion=sans`)}
                >
                    Sans émotion 😌
                </motion.button>
            </div>

            <button className="secondary-button bouncy-button" onClick={() => navigate('/selection')} style={{ position: 'absolute', bottom: '2rem', zIndex: 10 }}>
                Retour
            </button>
        </div>
    );
}
