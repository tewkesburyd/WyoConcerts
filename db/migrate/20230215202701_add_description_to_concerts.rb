class AddDescriptionToConcerts < ActiveRecord::Migration[7.0]
  def change
    add_column :concerts, :description, :string
  end
end
