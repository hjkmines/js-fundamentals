useEffect(() => {
    fetch('www.fetchapi.com')
}, [])

const arr1 = [1,2,3,4,5]

arr1.map(num => num + 1)





const firstLetter = 'a'; 
console.log(thirdLetter)

const someFunction = (letter) => {
    if (letter) {
        const secondLetter = 'b'; 
        console.log(thirdLetter)

        try {
            if (secondLetter) {
                const thirdLetter = 'c'

                console.log(secondLetter, firstLetter)
            }
        } catch (err) {
            console.log(err.messsage)
        }
    }
}


function (params) {

}

const artistSchema = new Schema({
    firstName: 'tony'
})

function (params) {
    console.log(this.firstName)
}


const someFunction = () => {
    console.log(this.firstName)
}




// for....statement 
const arr1 = [1, 2, 3, 4, 5]; 
const word = 'hello'
for (let i = 0; i < word.length; i++) {
    console.log(word[i])
}

const numbers = [
    {
        num: 1, 
        profile: {
            name: 'tony'
        }
    },
    {
        num: 7, 
        profile: {
            name: 'tim'
        }
    },
    {
        num: 4, 
        profile: {
            name: 'sam'
        }
    },
]

for (const { num, profile: { name } } of numbers) {
    console.log(num, name)
}

const someObject = {
    numbers: [1, 2, 3, 4, 5], 
    profile: {
        age: 88, 
        nicknames: ['tony', 'anthony', 'tim'], 
        addresses: {
            firstAddress: 'some address 1', 
            secondAddress: 'some address 2'
        }
    }
}

const firstAddress = someObject.profile.addresses.firstAddress
const nicknames = someObject.profile.nicknames

const {
    numbers, 
    profile:  {
        nicknames, 
        addresses: {
            firstAddress
        }
    }
} = someObject

console.log(firstAddress)
console.log(nicknames.map(name => name + '@'))




const arr2 = [1, 2, 3, 4, 5]; 
const arr3 = [6, 7]
concat - non mutative method 
console.log(arr2.concat([6, 7]))

const newArr = [...arr3, ...arr2]


const filterHighNumbers = arr2.filter(num => num <= 3 )
console.log(filterHighNumbers, arr2)

splice is a mutative method 
splice(startIndex, howManyToRemove, addItem1, addItemN......)

arr2.splice(2, 1, 3.5, 3.6, 3.7)

console.log(arr2)
const arr6 = [1, 2, 3, 4, 6]

arr6.includes(3)

const findIndex = arr6.indexOf(10)

console.log(findIndex)

arr6.pop() ---> mutative
arr6.push(7) ---> m
arr6.unshift(0) m
arr6.shift(0) m

const arr6 = [1, 2, 3, 4, 6]


const test = arr6.reduce((total, current) => total + current, 0)

// console.log(test)

const multiply = arr6.map(num => num * 2);

// console.log(multiply)


const profile = {
    name: 'tony', 
    name: 'bob'
}

// profile.age = 88; 

// profile.age ---> 88
// profile['age'] ---> 88

for (const key in profile) {
    console.log(profile[key])
}

const profile = new Map()

profile.set('name', 'tony')
profile.set('age', 99)

console.log(profile)

console.log(profile.has('name'))
console.log(profile.get('name'))

const numbers9 = new Set([1, 2, 3, 4])

// numbers.add(1)
// numbers.add(2)

console.log(numbers9)

//forEach is the only loop you can use for sets and maps


const fetchData = () => {
    fetch('www.google.com/api') /// <Promise> 
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => err.message)
}

const fetchData2 = async () => {
    try {
        const result = fetch('www.google.com/api')
        const result2 = fetch('www.cnbc.com/api')
        const [getResult, getResult2] = await Promise.all([result.catch(), actualResult2])

        const actualResult = await getresult.json()
        aconst actualResult2 = await result.json()


    } catch (err) {
        return err.message
    }
}
