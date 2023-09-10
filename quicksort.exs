defmodule QuickSort do
  def sort(numbers) do
    do_sort(numbers)
  end

  defp do_sort([]), do: []

  defp do_sort([pivot | tail]) do
    less_than_pivot = for x <- tail, x <= pivot, do: x
    greater_than_pivot = for x <- tail, x > pivot, do: x

    do_sort(less_than_pivot) ++ [pivot] ++ do_sort(greater_than_pivot)
  end
end

[7, 7, 14, 3, 9, 9, 18, 5, 11, 6, 2, 16]
|> QuickSort.sort()
|> IO.inspect()
