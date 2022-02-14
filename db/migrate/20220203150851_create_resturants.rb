class CreateResturants < ActiveRecord::Migration[6.1]
  def change
    create_table :resturants do |t|
      t.string :name
      t.string :image
      t.string :location
      t.text :description
      t.integer :rating

      t.timestamps
    end
  end
end
