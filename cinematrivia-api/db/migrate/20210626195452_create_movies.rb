class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image
      t.integer :year_released
      t.string :query
      t.timestamps
    end
  end
end
