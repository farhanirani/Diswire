import React from 'react'
import './SideBarChannel.css'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import './VoiceChannel.css'

function VoiceChannel({ id,channel }) {
    return (
        <div className="sidebarChannel">
            <h4><span className="sidebar-channelHash"><VolumeUpIcon /></span>General</h4>
        </div>
    )
}

export default VoiceChannel
