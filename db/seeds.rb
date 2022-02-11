
    User.create(name: 'Peter Johnson', password_digest: 'itspeter')
    User.create(name: 'John Doe', password_digest: 'itsjohn')
    User.create(name: 'JaneDoe', password_digest: '12345')
    User.create(name: 'John Peters', password_digest: 'itsme')
    User.create(name: 'Kim', password_digest: '123456')

    Resturant.create(name: "Mason's", image:'https://media-cdn.tripadvisor.com/media/photo-s/0d/57/84/30/sit-inside-or-out-on.jpg', location: '5th Avenue No. 6774, Austin, Texas', description: "Come to Masons and enjoy the best meals of all Texas!", rating: 4)
    Resturant.create(name: "McDonald's", image:'https://i.blogs.es/3c815c/thabang-mrx9wqk4w7a-unsplash/1366_2000.jpeg', location: '5th Avenue No. 654, Austin, Texas', description: "Enjoy the best burgers in the market at the best price!", rating: 5)
    Resturant.create(name: "Smelly Cat's Cove", image:'https://media.gettyimages.com/photos/hot-dog-stand-picture-id458619317?s=612x612', location: '5th Avenue No. 6444, Austin, Texas', description: "We make the best hot dogs in the world!", rating: 2)

    Reservation.create(
        start_time: DateTime.new(2001,2,3,4),
        end_time: DateTime.new(2001,2,3,5),
        user_id: 1,
        resturant_id: 2
    )
    Reservation.create(
        start_time: DateTime.new(2001,2,3,13),
        end_time: DateTime.new(2001,2,3,14),
        user_id: 2,
        resturant_id: 4
    )
    Reservation.create(
        start_time: DateTime.new(2001,2,3,14),
        end_time: DateTime.new(2001,2,3,15),
        user_id: 2,
        resturant_id: 5
    )
    Reservation.create(
        start_time: DateTime.new(2001,2,3,13),
        end_time: DateTime.new(2001,2,3,14),
        user_id: 3,
        resturant_id: 3
    )
    Reservation.create(
        start_time: DateTime.new(2001,2,3,14),
        end_time: DateTime.new(2001,2,3,15),
        user_id: 3,
        resturant_id: 4
    )