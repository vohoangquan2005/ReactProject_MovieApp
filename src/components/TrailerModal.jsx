function TrailerModal({ trailer, onClose }) {
    if (!trailer) return null;

    return (
        <div className="trailer-overlay" onClick={onClose}>
            <div className="trailer-modal"
                 onClick={(e) => e.stopPropagation()}>
                <button className="trailer-close"
                        onClick={onClose}
                > ✕ </button>
                <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title={trailer.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
export default TrailerModal;