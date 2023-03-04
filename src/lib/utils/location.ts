let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

export function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject('Geolocation is not supported by your browser')
        } else {
            navigator.geolocation.getCurrentPosition(
                position => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                },
                () => reject('Unable to retrieve your location'),
                options

            )
        }
    })
}
