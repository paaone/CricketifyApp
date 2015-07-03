using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StringTest
{
    class Program
    {
        static void Main(string[] args)
        {
            const string input1 = "There were ABCD Perls";
            const string input2 = "ABCD string";
            const string input3 = "No ABC dee string";
            const string input4 = "Test BAC";
            const string input5 = "saimal";
            const string input6 = "lamias";
            var input7 = new int[] { 1, 2,3,4,5,6,7,8,9,10,9 };

            Console.WriteLine(Contains1(input1));
            Console.WriteLine(Contains1(input2));
            Console.WriteLine(Contains1(input3));
            Console.WriteLine(Contains1(input4));

            Console.WriteLine(Contains2(input1));
            Console.WriteLine(Contains2(input2));
            Console.WriteLine(Contains2(input3));
            Console.WriteLine(Contains2(input4));

            var isPalindrome = IsPalindrome(input5, input6);

            var findDuplicatesInArray = FindDuplicatesInArray(input5);

            var findDuplicatesInSortedArray = FindDuplicatesInSortedArray(input7);

            Console.ReadKey();
        }

        static bool Contains1(string value)
        {
            // Searches for 4-letter constant string using Boyer-Moore style algorithm.
            // ... Uses switch as lookup table.
            int i = 3; // First index to check.
            int length = value.Length;
            var test = value[i];
            while (i < length)
            {
                switch (value[i])
                {
                    case 'D':
                        // Last character in pattern found.
                        // ... Check for definite match.
                        if (value[i - 1] == 'C' &&
                        value[i - 2] == 'B' &&
                        value[i - 3] == 'A')
                        {
                            return true;
                        }
                        // Must be at least 4 characters away.
                        i += 4;
                        continue;
                    case 'C':
                        // Must be at least 1 character away.
                        i += 1;
                        continue;
                    case 'B':
                        // Must be at least 2 characters away.
                        i += 2;
                        continue;
                    case 'A':
                        // Must be at least 3 characters away.
                        i += 3;
                        continue;
                    default:
                        // Must be at least 4 characters away.
                        i += 4;
                        continue;
                }
            }
            // Nothing found.
            return false;
        }

        static bool Contains2(string value)
        {
            // Searches for 4-letter constant string with IndexOf.
            return value.IndexOf("ABCD", StringComparison.Ordinal) != -1;
        }

        static bool IsPalindrome(string value1, string value2)
        {
            var test = "";
            var length = value2.Length;
            for(int i = value2.Length - 1; i >= 0; i--)
            {
                test += value2[i];
            }
            if (test == value1)
                return true;
            else
                return false;
        }

        static string FindDuplicatesInArray(string test)
        {
            var duplicates = "";
            var list = new List<char>();
            foreach(char c in test)
            {
                if (list.Contains(c))
                {
                    duplicates = c + " is the first duplicate character in string";
                    return duplicates;
                }
                list.Add(c);
            }
            return duplicates;
        }

        static int? FindDuplicatesInSortedArray(int[] test)
        {
            int? maxVal = null; //nullable so this works even if you have all super-low negatives
            int? secondLargestValue = null;
            int index = -1;
            for (int i = 0; i < test.Length; i++)
            {
                int thisNum = test[i];
                if (!maxVal.HasValue || thisNum > maxVal.Value)
                {
                    if (maxVal != null)
                        secondLargestValue = maxVal.Value;
                    maxVal = thisNum;
                    index = i;
                }
            }

            var expectedSum = (maxVal * (maxVal + 1)) / 2;

            var duplicates = new int[test.Length];
            int len = test.Length;
            var actualSum = 0; 

            for(int i = 0; i < len; i++)
            {
                actualSum += test[i];
            }

            var duplicate = actualSum - expectedSum;

            int[] arr = { 1, 8, 4, 5, 12, 2, 5, 6, 7, 1, 90, 100, 56, 8, 34 };
            
            foreach (int i in arr)
            {
                int f = 0;
                foreach (int j in arr)
                {
                    if (j > i)
                    {
                        f += 1;
                    }
                }
                if (f == 5)
                {
                    System.Console.WriteLine(i.ToString());
                    Console.ReadKey();
                }
                else
                {
                    f = 0;
                }

            }

            return duplicate;
        }
    }
}
