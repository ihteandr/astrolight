const geocoder = require('google-geocoder')({
    key: process.env.REACT_APP_GOOGLE_API_KEY
})

export const findPlace = (name: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        geocoder.find(name, (err: any, res: any) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}