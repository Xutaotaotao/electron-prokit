#include <stdint.h>

#if defined(WIN32) || defined(_WIN32)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

EXPORT uint64_t mul(int a,int b) {
  return a * b;
}

EXPORT double divide(int a, int b) {
  if (b == 0) {
    // 避免除以零的情况
    return 0.0;
  }
  return a / b;
}
