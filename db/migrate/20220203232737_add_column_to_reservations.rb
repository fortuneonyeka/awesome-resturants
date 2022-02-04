class AddColumnToReservations < ActiveRecord::Migration[6.1]
  def change
    add_reference :reservations, :resturant, null: false, foreign_key: true
  end
end
