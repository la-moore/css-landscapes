<template>
  <div class="screen bg-warmGray-100">
    <div class="circle bg-warmGray-200">
      <div class="content">
        <div class="absolute text-warmGray-300 w-full h-full top-12 left-0">
          <div class="el-1" />
          <div class="el-2" />
          <div class="el-3" />
          <div class="el-4" />
          <div class="el-5" />
        </div>

        <div class="absolute text-warmGray-400 w-full h-full bottom-0 left-0">
          <div class="el-6" />
          <div class="el-7" />
          <div class="el-8" />
          <div class="el-9" />
          <div class="el-10" />
          <div class="el-11" />
          <div class="el-12" />
          <div class="el-13" />
          <div class="el-14" />
        </div>

        <div class="absolute text-warmGray-500 w-full h-full bottom-0 left-0">
          <div class="el-15 left-16 h-24 w-5">
            <div class="el-16 top-14" />
            <div class="el-17 top-10" />
          </div>
          <div class="el-15 left-32 h-20 w-4">
            <div class="el-16 top-8" />
            <div class="el-17 top-12" />
          </div>
          <div class="el-18" />
        </div>

        <div class="absolute text-warmGray-600 w-full h-full bottom-0 left-0">
          <div class="el-19 bottom-20 left-6 w-16 h-16" />
          <div class="el-19 bottom-8 left-32 w-12 h-12" />
          <div class="el-19 bottom-16 right-12 w-24 h-24" />

          <div class="el-20 bottom-16 right-20 h-40">
            <div class="el-21" />
            <div class="el-22" />
            <div class="el-23" />
            <div class="el-24" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.el-1{
  @apply absolute top-0 left-44 w-6 h-12 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-6 before:h-24 before:-right-5 before:top-1.5 before:-mt-0.5 before:mr-0.5
  before:transform before:-rotate-20

  after:content-[''] after:absolute after:bg-current
  after:w-12 after:h-16 after:-right-0.5 after:top-2
  after:transform after:-rotate-40
}

.el-2{
  @apply absolute top-16 left-36 w-28 h-full bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-20 before:h-full before:right-20 before:-top-10 before:mr-2
  before:transform before:rotate-12

  after:content-[''] after:absolute after:bg-current
  after:w-20 after:h-full after:-right-16 after:top-1 after:-mr-1
  after:transform after:-rotate-20
}

.el-3{
  @apply absolute top-20 right-12 w-6 h-12 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-20 before:h-32 before:-left-3 before:top-10 before:-mt-0.5 before:-ml-0.5
  before:transform before:rotate-30

  after:content-[''] after:absolute after:bg-current
  after:w-6 after:h-24 after:right-2.5 after:top-1
  after:transform after:rotate-12
}

.el-4{
  @apply absolute bottom-0 left-12 w-full h-56 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-10 before:h-16 before:left-6 before:-top-10
  before:transform before:rotate-30

  after:content-[''] after:absolute after:bg-current
  after:w-10 after:h-16 after:-left-5 after:top-1.5
  after:transform after:rotate-30
}

.el-5{
  @apply absolute bottom-0 left-0 w-full h-52 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-24 before:h-24 before:right-20 before:-top-20
  before:transform before:rotate-20
}

.el-6{
  @apply absolute bottom-0 left-0 w-full h-32 bg-current
}

.el-7{
  @apply absolute bottom-32 left-40 w-full h-4 bg-current -ml-2

  before:content-[''] before:absolute before:bg-current
  before:w-10 before:h-10 before:-left-6 before:top-0
  before:transform before:rotate-40

  after:content-[''] after:absolute after:bg-current
  after:w-6 after:h-16 after:left-2 after:-top-10 after:-mt-1
  after:transform after:rotate-6
}

.el-8{
  @apply absolute bottom-48 left-44 w-4 h-4 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-4 before:h-16 before:left-0.5 before:top-1
  before:transform before:-rotate-6

  after:content-[''] after:absolute after:bg-current
  after:w-4 after:h-6 after:right-2 after:top-0.5
  after:transform after:rotate-30
}

.el-9{
  @apply absolute bottom-28 right-0 w-32 h-12 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-6 before:h-12 before:-left-2.5 before:top-1 before:ml-px
  before:transform before:rotate-20
}

.el-10{
  @apply absolute bottom-32 right-0 w-20 h-12 bg-current

  before:content-[''] before:absolute before:bg-current
  before:w-6 before:h-12 before:-left-1.5 before:top-1
  before:transform before:rotate-12
}

.el-11{
  @apply absolute bottom-0 right-0 w-12 h-60 bg-current
  transform rotate-12

  before:content-[''] before:absolute before:bg-current
  before:w-6 before:h-24 before:-left-2.5 before:top-1
  before:transform before:rotate-12
}

.el-12{
  @apply absolute bottom-0 left-2 w-12 h-60 bg-current
  transform -rotate-20
}

.el-13{
  @apply absolute bottom-40 left-8 w-6 h-8 bg-current
  transform -rotate-20

  before:content-[''] before:absolute before:bg-current
  before:w-6 before:h-10 before:-left-1.5 before:-top-1.5
  before:transform before:rotate-20

  after:content-[''] after:absolute after:bg-current
  after:w-6 after:h-10 after:-left-1.5 after:-bottom-1.5
  after:transform after:-rotate-20
}

.el-14{
  @apply absolute bottom-0 left-16 w-12 h-48 bg-current
  transform rotate-12

  before:content-[''] before:absolute before:bg-current
  before:w-full before:h-4 before:left-px before:-top-2
  before:transform before:rotate-12

  after:content-[''] after:absolute after:bg-current
  after:w-6 after:h-full after:-right-6 after:-top-0.5
  after:transform after:-rotate-12
}

.el-15{
  @apply absolute bottom-24 bg-current rounded-full
}

.el-16{
  @apply absolute right-full w-8 h-3 bg-current rounded-full -mr-4

  before:content-[''] before:absolute before:bg-current before:rounded-full
  before:w-3 before:h-10 before:left-0 before:bottom-0
}

.el-17{
  @apply absolute left-full w-8 h-3 bg-current rounded-full -ml-4

  before:content-[''] before:absolute before:bg-current before:rounded-full
  before:w-3 before:h-8 before:right-0 before:bottom-0
}

.el-18{
  @apply absolute bottom-0 left-0 w-full h-28 bg-current
}

.el-19{
  @apply absolute overflow-hidden

  before:content-[''] before:absolute before:bg-current
  before:w-2/3 before:h-2/3 before:left-0 before:-bottom-1/4 before:rounded-full

  after:content-[''] after:absolute after:bg-current
  after:w-1/2 after:h-1/2 after:right-0 after:-bottom-1/4 after:rounded-full
}

.el-20{
  @apply absolute bg-current w-2

  before:content-[''] before:absolute before:bg-current
  before:w-12 before:h-12 before:-left-8 before:-top-8 before:rounded-full
}

.el-21{
  @apply absolute w-10 h-4 right-0 top-8
  border-t-2 border-r-2 border-current rounded-tr-2xl

  before:content-[''] before:absolute before:bg-current
  before:w-10 before:h-10 before:-left-8 before:-top-6 before:rounded-full
}

.el-22{
  @apply absolute w-10 h-8 right-0 bottom-14
  border-b-2 border-l-2 border-current rounded-bl-2xl

  before:content-[''] before:absolute before:bg-current
  before:w-8 before:h-8 before:-left-6 before:-top-4 before:rounded-full
}

.el-23{
  @apply absolute w-8 h-8 left-0 bottom-14
  border-t-2 border-l-2 border-current rounded-tl-2xl

  before:content-[''] before:absolute before:bg-current
  before:w-10 before:h-10 before:-right-8 before:-top-5 before:rounded-full
}

.el-24{
  @apply absolute w-10 h-8 left-0 top-6
  border-b-2 border-r-2 border-current rounded-br-2xl

  before:content-[''] before:absolute before:bg-current
  before:w-8 before:h-8 before:-right-5 before:-top-5 before:rounded-full
}
</style>
