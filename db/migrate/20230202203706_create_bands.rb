class CreateBands < ActiveRecord::Migration[7.0]
  def change
    create_table :bands do |t|
      t.string :name
      t.string :category

      t.timestamps
    end
  end
end
