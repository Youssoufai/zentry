import { useRef, useState } from "react"
const [currentIndex, setCurrentIndex] = useState(1);
const [hasClicked, setHasClicked] = useState(false);
const [loadedVideos, setLoadedVideos] = useState(0);
const totalVideos = 4;
const nextVdRef = useRef(null);
const handleMIniVdClick = () => {


}
const Hero = () => {
    return (
        <div className="relative h-dvh w-screen">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div className="mask-clip-path absolute-center absolute z-50 cursor-pointer overflow-hidden rounded-lg">
                    <div>
                        MiniVideoPlayer
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero