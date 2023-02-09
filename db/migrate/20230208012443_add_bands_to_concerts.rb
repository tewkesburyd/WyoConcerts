class AddBandsToConcerts < ActiveRecord::Migration[7.0]
  def change
    add_column :concerts, :bands, :string
  end
end
