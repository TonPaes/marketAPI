class ForEach {
    public static void main(String[] args) {
        {
            int[] marks = { 125, 132, 95, 116, 110 };

            int hightest_mark = maximum(marks);
            System.out.println(hightest_mark);
        }
    }

    public static int maximum(int[] marks) {
        int max = marks[0];

        for (int num : marks) {
            if (max < num)
                max = num;
        }

        return max;
    }
}