// sinkronus -> berjalan dari atas ke bawah secara berurutan

console.log("[sync] step1: start application");
console.log("[sync] step2: processing fast task");
console.log("[sync] step3: end application");

console.log("[Async] step 1: start long fetching data process");

setTimeout(() => {
    console.log("[Async] step 3: data fetched successfully after 2 seconds");
}, 2000);

console.log("[Async] step 2: main thread is not blocked, running other task immediately");

console.log("[proof] step 1: Requesting resource...");

setTimeout(() => {
    console.log("[Proof] Step 3: heavy operation finished in background", 0)
})