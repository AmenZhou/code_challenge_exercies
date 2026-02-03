# Problem Statement: The Longest Identity Chain

## 1. Description
Given a set of data representing pairs of names (e.g., `[first_name, last_name]`), find the length of the longest continuous chain. A chain is formed when the **last name** of one pair matches the **first name** of another pair.

This is a classic **Longest Path in a Directed Acyclic Graph (DAG)** problem.

## 2. Examples
**Input:**
`[['james', 'root'], ['root', 'zhou'], ['zhou', 'john'], ['james', 'zhou']]`

**Output:**
`4`

**Explanation:**
- Chain 1: `james` -> `root` -> `zhou` -> `john` (4 names)
- Chain 2: `james` -> `zhou` -> `john` (3 names)
The longest sequence contains 4 names.

---

## 3. Constraints & Complexity
* **Time Complexity:** $O(V + E)$, where $V$ is the number of unique names (Vertices) and $E$ is the number of pairs (Edges).
* **Space Complexity:** $O(V + E)$ to store the adjacency list and the memoization cache.



---

## 4. Implementation (Ruby)

### Recursion
```ruby
def longest_chain(names)
  # 1. Your name_hash logic (optimized)
  # Maps a first_name to all pairs that START with that name
  name_hash = Hash.new { |h, k| h[k] = [] }
  chain = 0
  result = 0
  names.each do |pair|
    name_hash[pair[0]] << pair
  end

  names.each do |name|
    chain = recurrsion(name[1], name_hash, 1)
 
    result = [result, chain].max
  end
  
  p result
end

def recurrsion(first_name, name_hash, chain)
  return chain if name_hash[first_name].nil? || name_hash[first_name].length == 0
  
  max_depth = chain
  
  name_hash[first_name].each do |e|
    current_depth = recurrsion(e[1], name_hash, chain + 1)
    max_depth = [max_depth, current_depth].max
  end
  
  # Return the maximum depth found in this branch
  max_depth
end

```

### Non-recurrsion
```ruby
# Generate a Hash to cache the depth of each name
# Input {"james"=>[["james", "root"], ["james", "peter"]], "root"=>[["root", "zhou"]], "zhou"=>[["zhou", "john"]]}

# iteration 1 - 'james root', there are 2 names with first name 'root' - { james: 1, root: 2, zhou: 2 }
# iteration 2 - 'james peter', there are 0 name for 'peter' - { james: 1, root: 2, zhou: 2 }
# iteration 3 - 'root zhou', { james: 1, root: 2, zhou: 3 }
# iteration 4 - 'zhou john', { james: 1, root: 2, zhou: 3 }

# the max is 3
```
