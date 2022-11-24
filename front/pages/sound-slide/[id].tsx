import {SoundSlide} from "../../components/sound-slide/SoundSlide";
import {useRouter} from "next/router";

export default function SoundSlidePage() {
  const router = useRouter()
  const { id } = router.query;
  return (
    <SoundSlide></SoundSlide>
  )
}