<template>
  <div class="screen bg-rose-100">
    <div class="circle bg-rose-300">
      <div class="content">
        <div class="el-1" />

        <div class="absolute text-rose-400 w-full h-full top-32 left-1/2 ml-2">
          <div class="el-2" />
          <div class="el-3" />
          <div class="el-4" />
          <div class="el-5" />
          <div class="el-6" />
          <div class="el-7" />
        </div>

        <div class="absolute text-rose-500 w-full h-full top-40 right-1/2 -mr-2">
          <div class="el-18 bg-current w-4 h-4 top-0 right-7" />
          <div class="el-18 bg-current w-6 h-6 -top-3 right-28" />
          <div class="el-18 bg-current w-8 h-8 -top-4 right-32 mr-3" />

          <div class="el-8" />
          <div class="el-9" />
          <div class="el-10" />
          <div class="el-11" />
        </div>

        <div class="absolute text-rose-600 w-full h-full top-1/2 right-2/3 mt-6 -mr-6">
          <div class="el-18 bg-current w-6 h-6 -top-4 right-28" />
          <div class="el-18 bg-current w-10 h-10 -top-4 right-32" />

          <div class="el-12" />
          <div class="el-13" />
        </div>

        <div class="absolute text-rose-700 w-full h-full top-0 left-1/4">
          <div class="el-18 bg-current w-8 h-8 top-28 left-60 -mt-1 ml-1" />
          <div class="el-18 bg-current w-6 h-6 top-40 left-48 -mt-1.5 ml-1" />
          <div class="el-18 bg-current w-10 h-10 bottom-8 left-28" />
          <div class="el-18 bg-current w-8 h-8 bottom-8 left-24 -ml-1" />
          <div class="el-18 bg-current w-6 h-6 bottom-8 left-6" />

          <div class="el-14" />
          <div class="el-15" />
          <div class="el-16" />
          <div class="el-17" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.el-1{
  @apply absolute w-40 h-40 top-12 right-24 rounded-full bg-rose-200 bg-opacity-50

  before:content-[''] before:absolute before:inset-2
  before:rounded-full before:bg-rose-200

  after:content-[''] after:absolute after:inset-4
  after:rounded-full after:bg-white
}

.el-2{
  @apply absolute top-0 left-16 w-6 h-12 bg-current rounded-tl-lg

  before:content-[''] before:absolute before:bg-current
  before:w-12 before:h-6 before:left-2 before:top-3 before:mt-0.5
  before:transform before:rotate-45

  after:content-[''] after:absolute after:bg-current
  after:w-40 after:h-6 after:left-0 after:top-8 after:mt-0.5
}

.el-3{
  @apply absolute top-2 left-16 w-12 h-12 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-12 before:h-6 before:left-8 before:top-3 before:mt-0.5
  before:transform before:rotate-45
}

.el-4{
  @apply absolute top-12 left-6 w-12 h-12 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-12 before:h-14 before:left-3 before:-top-7 before:ml-0.5
  before:transform before:rotate-50
}

.el-5{
  @apply absolute top-20 left-4 w-12 h-12 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-12 before:h-6 before:left-0.5 before:-top-1
  before:transform before:rotate-45
}

.el-6{
  @apply absolute top-32 left-0 w-12 h-full bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-12 before:h-6 before:left-0.5 before:-top-1
  before:transform before:rotate-45
}

.el-7{
  @apply absolute top-12 left-12 right-0 bottom-0 bg-current
}

.el-8{
  @apply absolute top-0 right-0 w-6 h-6 bg-current rounded-tr-lg rounded-br-md

  before:content-[''] before:absolute before:bg-current
  before:w-4 before:h-4 before:right-2 before:top-3
  before:transform before:rotate-45
}

.el-9{
  @apply absolute top-2 right-4 w-10 h-12 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-4 before:h-4 before:right-1 before:-bottom-2
  before:transform before:rotate-45

  after:content-[''] after:absolute after:bg-current
  after:w-4 after:h-4 after:-left-2 after:top-1
  after:transform after:rotate-45
}

.el-10{
  @apply absolute top-4 right-6 w-full h-full bg-current
}

.el-11{
  @apply absolute top-2 right-12 w-full h-full bg-current rounded-4xl border-4 border-white

  before:content-[''] before:absolute before:border-2 before:border-white
  before:w-12 before:h-full before:right-6 before:-top-4

  after:content-[''] after:absolute after:bg-current after:rounded-2xl
  after:w-full after:h-full after:-top-6 after:right-8
}

.el-12{
  @apply absolute top-0 left-0 right-24 bottom-0 bg-current rounded-tr-lg

  before:content-[''] before:absolute before:bg-current
  before:w-16 before:h-12 before:-right-8 before:top-4 before:mt-0.5
  before:transform before:rotate-45

  after:content-[''] after:absolute after:bg-current
  after:w-12 after:h-full after:-right-10 after:top-12
}

.el-13{
  @apply absolute w-32 h-12 -right-4 top-28 bg-current
  transform rotate-45
}

.el-14{
  @apply absolute w-full h-12 left-0 bottom-0 bg-current rounded-2xl

  before:content-[''] before:absolute before:bg-current
  before:w-12 before:h-12 before:left-32 before:-top-6 before:mt-0.5
  before:transform before:rotate-45

  after:content-[''] after:absolute after:bg-current
  after:w-full after:h-10 after:left-40 after:-top-8 after:-ml-2
}

.el-15{
  @apply absolute w-56 h-32 right-2 bottom-0 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-8 before:h-8 before:left-1.5 before:-top-4 before:ml-px
  before:transform before:rotate-45

  after:content-[''] after:absolute after:bg-current
  after:w-full after:h-10 after:left-7 after:-top-6 after:mt-0.5 after:-ml-1
}

.el-16{
  @apply absolute w-52 h-48 right-1 bottom-0 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-8 before:h-8 before:left-1.5 before:-top-4 before:ml-px
  before:transform before:rotate-45

  after:content-[''] after:absolute after:bg-current
  after:w-full after:h-10 after:left-7 after:-top-6 after:mt-0.5 after:-ml-1
}

.el-17{
  @apply absolute w-40 h-64 right-0 bottom-0 bg-current rounded-2xl

  before:content-[''] before:absolute before:bg-current
  before:w-8 before:h-8 before:-left-2 before:top-7
  before:transform before:rotate-45
}

.el-18{
  @apply absolute transform rotate-45

  before:content-[''] before:absolute before:w-3/4 before:h-3/4
  before:bg-inherit before:bottom-3/4 before:right-3/4
  before:transform before:translate-y-2/4 before:translate-x-2/4

  after:content-[''] after:absolute after:w-1/2 after:h-1/2
  after:bg-inherit after:bottom-full after:right-full
  after:transform after:translate-y-2/4 after:translate-x-2/4
}
</style>
