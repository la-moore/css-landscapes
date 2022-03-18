<template>
  <div class="screen bg-cyan-100">
    <div class="circle bg-cyan-300">
      <div class="content">
        <div class="el-5 bottom-8 -left-10 rotate-45" />
        <div class="el-6 bottom-8 left-2 rotate-40" />
        <div class="el-5 bottom-12 -right-16 -rotate-45 -scale-x-100" />
        <div class="el-6 bottom-8 -right-6 -rotate-40 -scale-x-100" />

        <div class="el-7 w-32 h-32 bottom-24 left-1/2 ml-16 rotate-60" />
        <div class="el-7 w-44 h-44 bottom-12 left-1/2 rotate-45" />

        <div class="el-8 bg-cyan-700 w-12 h-12 bottom-44 left-0" />
        <div class="el-8 bg-cyan-700 w-10 h-10 bottom-36 left-14" />
        <div class="el-8 bg-cyan-700 w-8 h-8 bottom-36 left-24 -ml-3 -mb-1" />
        <div class="el-1" />

        <div class="el-8 bg-cyan-800 w-12 h-12 bottom-36 -right-1 -mb-2" />
        <div class="el-8 bg-cyan-800 w-10 h-10 bottom-32 right-16" />
        <div class="el-8 bg-cyan-800 w-8 h-8 bottom-28 right-44 -mr-2" />
        <div class="el-8 bg-cyan-800 w-12 h-12 bottom-24 right-48" />
        <div class="el-2" />

        <div class="el-3" />
        <div class="el-4 w-24 top-12 left-28" />
        <div class="el-4 w-28 top-20 left-12" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.el-1{
  @apply absolute w-full h-36 bottom-0 right-20 bg-cyan-700
  transform rotate-30
}

.el-2{
  @apply absolute w-full h-32 bottom-0 left-6 bg-cyan-800
  transform -rotate-12
}

.el-3{
  @apply absolute w-16 h-16 top-12 right-20 rounded-full bg-cyan-100
}

.el-4{
  @apply absolute h-4 rounded-full bg-cyan-100
}

.el-5{
  @apply absolute bg-cyan-400 w-44 h-44
  transform overflow-hidden

  before:content-[''] before:absolute before:-top-4 before:left-0 before:w-6 before:h-6
  before:bg-cyan-200 before:-mt-1
  before:transform before:rotate-20

  after:content-[''] after:absolute after:w-36 after:h-36
  after:-top-20 after:left-6 after:-ml-0.5 after:bg-cyan-200
  after:transform after:rotate-70
}

.el-6{
  @apply absolute bg-cyan-400 w-44 h-44
  transform overflow-hidden

  before:content-[''] before:absolute before:-top-12 before:left-0 before:w-14 before:h-14
  before:bg-cyan-200 before:-ml-1 before:-mt-0.5
  before:transform before:rotate-12

  after:content-[''] after:absolute after:w-28 after:h-28
  after:-top-20 after:left-10 after:bg-cyan-200
  after:transform after:rotate-60
}

.el-7{
  @apply absolute bg-cyan-600
  transform overflow-hidden -translate-x-1/2

  before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-1/2
  before:bg-cyan-500 before:-ml-1 before:-mt-0.5
  before:transform before:rotate-70 before:-translate-y-1/2 before:translate-x-1/8

  after:content-[''] after:absolute after:w-3/4 after:h-3/4
  after:-top-1/4 after:left-1/3 after:bg-cyan-500
  after:transform after:rotate-30 after:translate-y-1/4
}

.el-8{
  @apply absolute transform rotate-45

  before:content-[''] before:absolute before:w-3/4 before:h-3/4
  before:bg-inherit before:bottom-3/4 before:right-3/4
  before:transform before:translate-y-2/4 before:translate-x-2/4

  after:content-[''] after:absolute after:w-1/2 after:h-1/2
  after:bg-inherit after:bottom-full after:right-full
  after:transform after:translate-y-2/4 after:translate-x-2/4
}
</style>
