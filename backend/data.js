import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Subbu',
            email: 'subbu@gmail.com',
            password: bcrypt.hashSync('Abc123'),
            isAdmin: true
        },
        {
            name: 'User1',
            email: 'user1@gmail.com',
            password: bcrypt.hashSync('Password1'),
            isAdmin: false
        }
    ],

    products: [
        {
            name: 'iPhone',
            slug: 'iphone',
            category: 'Phone',
            image: '/images/p1.png',
            price: 999,
            brand: 'Apple',
            description: 'Best Phone',
            rating: 3.5,
            numReviews: 2500,
            countInStock: 5
        },
        {
            name: 'Pixel',
            slug: 'pixel',
            category: 'Phone',
            image: '/images/p2.png',
            price: 699,
            brand: 'Google',
            description: 'Best Phone',
            rating: 4,
            numReviews: 4000,
            countInStock: 10
        },
        {
            name: 'Macbook',
            slug: 'macbook-air',
            category: 'Laptop',
            image: '/images/l2.png',
            price: 1400,
            brand: 'Apple',
            description: 'Best Laptop',
            rating: 4,
            numReviews: 5000,
            countInStock: 7
        },
        {
            name: 'Airpods',
            slug: 'airpods-pro',
            category: 'Headphones',
            image: '/images/h1.png',
            price: 599,
            brand: 'Apple',
            description: 'Best Headphone',
            rating: 5,
            numReviews: 100,
            countInStock: 0
        }
    ]
}

export default data;