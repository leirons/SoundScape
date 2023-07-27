import { useRef, useState } from "react";

export default function Player(props) {
    const [isPlayed, setPlay] = useState(false);
    const audioRef = useRef(new Audio(props.path));
    const [volume, setVolume] = useState(0.5);
    const [isClicked, setClicked] = useState(false);

    const playMusic = (event) => {
        const audio = audioRef.current;
        audio.loop = true;

        if (event.target.nodeName.toLowerCase() === "input") {
            return;
        }

        if (isPlayed === false) {
            audio.play();
            setPlay(true);
        } else {
            setPlay(false);
            audio.pause();
        }

        // Добавим подсветку при нажатии на sound-wrapper
        setClicked(!isClicked);
    };

    const handleVolumeChange = (event) => {
        event.stopPropagation();

        const audio = audioRef.current;
        const newVolume = event.target.value;
        setVolume(newVolume);
        audio.volume = newVolume;
    };

    return (
        <div>
            <div
                onClick={playMusic}
                className={`sound-wrapper ${isClicked ? "light-up-active" : "light-up"}`}
            >
                <div className="sound">
                    <div>
                        <img src={props.icon} width="40px" alt="Icon" />
                    </div>
                    <div>{props.name}</div>
                    <div>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
