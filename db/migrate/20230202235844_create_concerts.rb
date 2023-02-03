class CreateConcerts < ActiveRecord::Migration[7.0]
  def change
    create_table :concerts do |t|
      t.string :date
      t.string :name
      t.string :price
      t.string :website
      t.belongs_to :venue, null: false, foreign_key: true

      t.timestamps
    end
  end
end
