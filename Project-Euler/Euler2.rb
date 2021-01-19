def even_fibonacci_sum(limit)
    num = 2
    previous_num = 1
    sum = 0
    until num >= limit
    if num.even?
        sum += num
    end
        new_num = num + previous_num
        previous_num = num
        num = new_num
    end
    sum
  end