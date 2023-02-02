class CreateVenues < ActiveRecord::Migration[7.0]
  def change
    create_table :venues do |t|
      t.string :name
      t.string :address
      t.string :city
      t.integer :zip
      t.string :state
      t.string :description
      t.string :website

      t.timestamps
    end
  end
end
