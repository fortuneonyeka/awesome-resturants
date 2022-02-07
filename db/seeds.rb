
    User.create(name: 'Peter Johnson', password_digest: 'itspeter')
    User.create(name: 'John Doe', password_digest: 'itsjohn')
    User.create(name: 'JaneDoe', password_digest: '12345')
    User.create(name: 'John Peters', password_digest: 'itsme')
    User.create(name: 'Kim', password_digest: '123456')

    Resturant.create(name: "Mason's", image:'me.me.com/url1', location: '5th Avenue No. 6774, Austin, Texas', description: "Come to Masons and enjoy the best meals of all Texas!", rating: 4)
    Resturant.create(name: "MacDonald's", image:'me.me.com/url2', location: '5th Avenue No. 654, Austin, Texas', description: "Enjoy the best burgers in the market at the best price!", rating: 5)
    Resturant.create(name: "Smelly Cat's Cove", image:'me.me.com/url1', location: '5th Avenue No. 6444, Austin, Texas', description: "-", rating: 2)

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