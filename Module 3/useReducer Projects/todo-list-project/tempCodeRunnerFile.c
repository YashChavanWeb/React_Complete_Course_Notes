#include<stdio.h>

int main() {

    int n = 5;

    // no of rows
    for(int i=0; i<n; i++) {

        // what to print on each row
        for(int j=0; j<n; j++) {
            printf("* ");
        } 

        printf("\n");



    }

    return 0;
}