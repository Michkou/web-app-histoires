import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function VideoPlayerPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const getTitle = () => {
        if (id === '3') return "Le mammouth Helmouth joue au fouth";
        if (id === '4') return "Helmouth a perdu sa confiance";
        return "Histoire";
    };

    const getVideoSrc = () => {
        if (id === '3') return "/web-app-histoires/videos/Video_H3_fouth.mp4";
        if (id === '4') return "/web-app-histoires/videos/Video_H4.mp4";
        return null;
    };

    const videoSrc = getVideoSrc();

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
                <h1 className="main-title" style={{ marginBottom: 0, fontSize: '2.5rem' }}>{getTitle()}</h1>
            </motion.div>

            <div className="video-wrapper" style={{ position: 'relative', zIndex: 10, overflow: 'hidden' }}>
                {videoSrc ? (
                    <video width="100%" height="100%" controls style={{ objectFit: 'contain', borderRadius: '30px' }}>
                        <source src={videoSrc} type="video/mp4" />
                        Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                ) : (
                    <div className="video-placeholder">
                        <span className="placeholder-icon">🎬</span>
                        <p style={{ fontSize: '2rem' }}>Vidéo de l'{getTitle()} à insérer ici !</p>
                        <p className="hint-text" style={{ fontSize: '1.2rem' }}>(Remplacez simplement le code par votre fichier MP4 plus tard)</p>
                    </div>
                )}
            </div>

            <button className="secondary-button bouncy-button" onClick={() => navigate('/selection')} style={{ position: 'relative', zIndex: 10, marginTop: '2rem' }}>
                Retour aux histoires
            </button>
        </div>
    );
}
