<template>
  <div class="screen bg-emerald-100">
    <div class="circle bg-emerald-200">
      <div class="content">
        <div class="el-1" />
        <div class="el-2" />
        <div class="el-3">
          <div class="el-3-1" />
        </div>

        <div class="el-5 w-10 h-10 top-32 right-0">
          <div class="el-5-1" />
          <div class="el-5-2" />
        </div>

        <div class="el-5 w-6 h-6 top-24 right-14">
          <div class="el-5-1" />
          <div class="el-5-2" />
        </div>

        <div class="el-5 w-4 h-4 top-16 right-14">
          <div class="el-5-1" />
          <div class="el-5-2" />
        </div>

        <div class="el-4" />

        <div class="el-6 w-10 h-10 bottom-20 right-24" />

        <div class="el-6 w-4 h-4 bottom-28 right-12" />

        <div class="el-6 w-6 h-6 bottom-28 right-36" />

        <div class="el-6 w-10 h-10 bottom-10 left-20" />

        <div class="el-6 w-8 h-8 bottom-24 left-10" />

        <div class="el-6 w-4 h-4 bottom-28 left-32" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.el-1{
  @apply absolute w-32 h-32 bottom-6 left-12 bg-emerald-300
  transform rotate-30
}

.el-2{
  @apply absolute w-52 h-52 bottom-2 right-0 bg-emerald-400 overflow-hidden
  transform rotate-45

  before:content-[''] before:absolute before:w-24 before:h-16
  before:top-0 before:left-0 before:bg-emerald-300
}

.el-3{
  @apply absolute w-full h-28 bottom-0 left-0 bg-emerald-500 overflow-hidden
}

.el-3-1{
  @apply absolute w-8 h-28 -top-10 left-40 bg-emerald-600
  transform rotate-30

  before:content-[''] before:absolute before:w-40 before:h-12
  before:-bottom-2 before:left-6 before:bg-emerald-600
  before:transform before:rotate-6
}

.el-4{
  @apply absolute z-20 w-40 h-4 top-12 left-20 rounded-full bg-emerald-100

  before:content-[''] before:absolute before:w-40 before:h-4 before:rounded-full
  before:top-8 before:left-12 before:bg-emerald-100

  after:content-[''] after:absolute after:w-40 after:h-4 after:rounded-full
  after:top-16 after:-left-12 after:bg-emerald-100
}

.el-5{
  @apply absolute

  before:content-[''] before:z-10 before:absolute before:w-full before:h-full before:rounded-full
  before:left-2/4 before:top-1/4 before:-ml-0.5 before:bg-emerald-200

  after:content-[''] after:z-10 after:absolute after:w-full after:h-full after:rounded-full
  after:right-2/4 after:top-1/4 after:-mr-0.5 after:bg-emerald-200
}

.el-5-1{
  @apply absolute w-full h-full top-0 left-1/3 rounded-full bg-emerald-900
}

.el-5-2{
  @apply absolute w-full h-full top-0 right-1/3 rounded-full bg-emerald-900
}

.el-6{
  @apply absolute z-20

  before:content-[''] before:absolute before:w-full before:h-full
  before:rounded-full before:rounded-tl-none before:bg-emerald-700
  before:left-0 before:top-0
  before:transform before:rotate-45

  after:content-[''] after:absolute after:w-1/6 after:h-full
  after:left-1/2 after:top-full after:bg-emerald-700
  after:transform after:-translate-x-1/2 after:-translate-y-px
}
</style>
