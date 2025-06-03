import axios from 'axios';

function getRandomUser () {
    const randomUser = {}
    axios
    .get('https://randomuser.me/api')
    .then((result) => {
        const userInfo = result.data.results[0]

        randomUser.username = userInfo.login.username
        randomUser.name = `${userInfo.name.first} ${userInfo.name.last}`
        randomUser.password = userInfo.login.password
        randomUser.phone = userInfo.phone
        randomUser.email = userInfo.email
        randomUser.registered = userInfo.registered.date
        randomUser.country = userInfo.location.country
        randomUser.avatar_img_url = userInfo.picture.large
        randomUser.favourite_beers = []
        randomUser.favourite_categories = []
        randomUser.reviews = []
        randomUser.followers = []
        randomUser.following = []
        console.log(result.data.results)

        return randomUser
    })
    .then((user) => {
        console.log(user)
    })
}

getRandomUser()