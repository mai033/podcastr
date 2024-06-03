import React from 'react'

interface GeneratePodcastProps {
    setAudioStorageId: (audioStorageId: Id<'_storage'> | null) => void;
    setAudioUrl: (audioUrl: string) => void;
    voiceType: string | null;
    audio: string;
    voicePrompt: string;
    setVoicePrompt: (voicePrompt: string) => void;
    setAudioDuration: (audioDuration: number) => void;
}

const GeneratePodcast = ({ setAudioStorageId, setAudioUrl, voiceType, audio, voicePrompt, setVoicePrompt, setAudioDuration }: GeneratePodcastProps) => {
  return (
    <div>GeneratePodcast</div>
  )
}

export default GeneratePodcast