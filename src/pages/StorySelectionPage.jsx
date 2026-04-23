import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function StorySelectionPage() {
    const navigate = useNavigate();

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

            {/* Nuage 3: Assez grand au centre */}
            <motion.img
                src="/web-app-histoires/images/cloud.svg"
                style={{ position: 'absolute', top: '-1%', left: '30%', width: '260px', zIndex: 1, opacity: 0.95 }}
                animate={{ x: [0, 45, -25, 0] }}
                transition={{ repeat: Infinity, duration: 28, ease: "easeInOut", delay: 5 }}
            />

            {/* Nuage 4: Assez grand au centre à droite */}
            <motion.img
                src="/web-app-histoires/images/cloud.svg"
                style={{ position: 'absolute', top: '4%', left: '58%', width: '280px', zIndex: 1, opacity: 0.95 }}
                animate={{ x: [0, 45, -25, 0] }}
                transition={{ repeat: Infinity, duration: 28, ease: "easeInOut", delay: 5 }}
            />

            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="title-container title-glow"
                style={{ zIndex: 10, marginTop: '-1rem', marginBottom: '2rem' }}
            >
                <h1 className="main-title" style={{ marginBottom: 0 }}>Choisis ton histoire magique !</h1>
            </motion.div>

            <div className="cards-container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Histoire 1: La moumoute du mammouth Helmouth */}
                <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="story-card emotion-card"
                    style={{
                        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%), url('/web-app-histoires/images/moumoute.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={() => navigate('/story/1')}
                >
                    <h2 style={{ color: 'white', textShadow: '2px 2px 10px rgba(0,0,0,1)', textAlign: 'center' }}>La moumoute du mammouth Helmouth</h2>
                </motion.div>

                {/* Histoire 3: Le mammouth Helmouth joue au foot */}
                <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="story-card emotion-card"
                    style={{
                        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%), url('/web-app-histoires/images/story4_scene_15.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={() => navigate('/story/3')}
                >
                    <h2 style={{ color: 'white', textShadow: '2px 2px 10px rgba(0,0,0,1)', textAlign: 'center' }}>Le mammouth Helmouth joue au foot</h2>
                </motion.div>
            </div>

            <button className="secondary-button bouncy-button" onClick={() => navigate('/')} style={{ position: 'relative', zIndex: 10, marginTop: '2rem' }}>
                Retour
            </button>
        </div>
    );
}
