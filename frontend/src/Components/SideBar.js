import React from 'react'
import "./Sidebar.css"
import SideBarChannel from "./SideBarChannel"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';
import MicOffIcon from '@material-ui/icons/MicOff';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import VoiceChannel from './VoiceChannel'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h3>PyroShin</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar-channels">
                <div className="sidebar-channelsHeader">
                    <div className="sidebar-header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar-addChannel"/>
                </div>
                <div className="sidebar-channelsList">
                <SideBarChannel />
                </div>
                <div className="sidebar-channelsHeader" style={{marginTop:'10px'}}>
                    <div className="sidebar-header">
                        <ExpandMoreIcon />
                        <h4>Voice Channels</h4>
                    </div>
                    <AddIcon className="sidebar-addChannel"/>
                </div>
                <div className="sidebar-channelsList">
                <VoiceChannel />
                </div>
            </div>
            <div className="sidebar-voice">
                <SignalCellularAltIcon className="sidebar-voiceicon" fontSize="large"/>
                <div className="sidebar-voiceinfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar-voiceicons">
                    <InfoIcon className="voiceicons"/>
                    <CallIcon className="voiceicons"/>
                </div>
            </div>
            <div className="sidebar-profile">
                <Avatar style={{ height: '30px', width: '30px' }}/>
                <div className="sidebar-profileinfo">
                    <h3>vincent2528</h3>
                    <p>#2513</p>
                </div>
                <div className="sidebar-profileicons">
                    <MicOffIcon className="profileicons"/>
                    <HeadsetIcon className="profileicons" />
                    <SettingsIcon className="profileicons" />
                </div>
            </div>
        </div>
    )
}

export default SideBar
