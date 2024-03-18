import RTCView from './RTCView'

if (typeof window !== 'undefined') {
  window.MediaStream.prototype.release = function release () {
    this.getTracks().forEach((track) => track.stop())
  }

  window.MediaStreamTrack.prototype._switchCamera = function _switchCamera () {
    console.warn('_switchCamera is not implemented on web.')
  }
}

const window = window || {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCRtpTransceiver,
  RTCRtpReceiver,
  RTCRtpSender,
  RTCErrorEvent,
  MediaStream,
  MediaStreamTrack
}

const {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCRtpTransceiver,
  RTCRtpReceiver,
  RTCRtpSender,
  RTCErrorEvent,
  MediaStream,
  MediaStreamTrack
} = window

const navigator = navigator || { mediaDevices, permissions }

const { mediaDevices, permissions } = navigator

function registerGlobals () {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    window.mediaDevices = navigator.mediaDevices
    window.permissions = navigator.permissions
  }
}

export {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCRtpTransceiver,
  RTCRtpReceiver,
  RTCRtpSender,
  RTCErrorEvent,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  permissions,
  registerGlobals,
  RTCView
}
