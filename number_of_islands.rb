# ==============================================================================
# CHALLENGE: Number of Islands
# DIFFICULTY: Medium
# COMMONALITY: High (Amazon, Google, Meta, Microsoft)
# ==============================================================================
# DESCRIPTION:
# Given an m x n 2D binary grid 'grid' representing a map of '1's (land) 
# and '0's (water), return the number of islands.
#
# An island is surrounded by water and is formed by connecting adjacent 
# lands horizontally or vertically. You may assume all four edges of the 
# grid are all surrounded by water.
#
# CONSTRAINTS:
# - m == grid.length
# - n == grid[i].length
# - 1 <= m, n <= 300
# - grid[i][j] is '0' or '1'.
# ==============================================================================

# [Image of Breadth-First Search vs Depth-First Search on a grid]

# @param {Character[][]} grid
# @return {Integer}
def num_islands(grid)
  # --- YOUR CODE GOES HERE ---
  # 1. Handle edge cases (empty grid).
  # 2. Initialize an island counter.
  # 3. Iterate through rows and columns.
  # 4. When a '1' is found, increment counter and trigger a search (DFS/BFS).
  # 5. The search should mark all connected '1's as '0' (to "sink" the island).
  
  # Loop through the 2d array to find the first 1
  # grid[0][0] -> grid[0][1] -> change it to 0 when it is 1
  #              -> grid[0][2]
  #              -> grid[1][2]
  #            -> grid[1][0] -> change it to 0 when it is 1
  #              -> grid[1][2]
  #              -> grid[2][0]
  # 
  clone_grid = grid.map(&:dup)
  grid.each_with_index do |array, n|
    array.each_with_index do |cell, m|
      if !zero?(cell)
        iterate(n+1, m, grid, clone_grid)
        iterate(n, m+1, grid, clone_grid)
      end
    end
  end
  
  p "result: #{clone_grid}"
  p "grid: #{grid}"
  number_of_ones(clone_grid)
end

def number_of_ones(clone_grid)
  number = 0
  clone_grid.each do |array|
    array.each do |cell|
      number += 1 if !zero?(cell)
    end
  end
  
  number
end

def set_to_zero(n, m, grid, clone_grid)
 if !zero?(grid[n][m])
    clone_grid[n][m] = '0' 
     p "n-#{n}, m-#{m}"
 end
end

def zero?(cell)
  cell == '0'
end

def iterate(n, m, grid, clone_grid)
  # p "iterate n-#{n}, m-#{m}"
  return if n >= clone_grid.length || m >= clone_grid[0].length
  
   set_to_zero(n, m, grid, clone_grid)
  
   return if zero?(clone_grid[n][m])
  iterate(n, m+1, clone_grid, clone_grid) if !(m >= clone_grid[0].length - 1)
  iterate(n+1, m, clone_grid, clone_grid) if !(n >= clone_grid.length - 1)
  iterate(n, m-1, clone_grid, clone_grid) if m > 0
  iterate(n-1, m, clone_grid, clone_grid) if n > 0
end

# --- TEST CASES ---

# Case 1: Three distinct islands
grid1 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
# Expected: 3

# Case 2: One giant island
grid2 = [
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]
]
# Expected: 1

puts "Test Case 1 Result: #{num_islands(grid1) || 'Not implemented'}"
 puts "Test Case 2 Result: #{num_islands(grid2) || 'Not implemented'}"
