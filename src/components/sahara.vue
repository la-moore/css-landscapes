<template>
  <div class="screen bg-yellow-100">
    <div class="circle bg-yellow-300">
      <div class="content">
        <div class="el-1" />
        <div class="el-2" />
        <div class="absolute bg-yellow-300 size-60 bottom-8 left-40 -ml-2 rounded-full overflow-hidden">
          <div class="el-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.el-1{
  @apply absolute size-40 top-16 left-16 rounded-full bg-yellow-200/50 z-20

  before:content-[''] before:absolute before:inset-4
  before:rounded-full before:bg-yellow-200

  after:content-[''] after:absolute after:inset-8
  after:rounded-full after:bg-white
}

.el-2{
  @apply absolute size-96 -bottom-60 -left-24 rounded-full bg-yellow-200

  before:content-[''] before:absolute before:size-full before:-bottom-2 before:left-24
  before:rounded-full before:bg-yellow-500 before:mb-0.5
}

.el-3{
  @apply absolute size-96 -bottom-24 -right-10 rounded-full bg-yellow-500
  transform translate-y-1/3

  before:content-[''] before:absolute before:size-3/4 before:top-12 before:right-32
  before:rounded-full before:bg-yellow-200
  before:transform before:scale-150

  after:content-[''] after:absolute after:size-full
  after:bottom-48 after:right-40 after:mr-2 after:rounded-full after:bg-yellow-300
}
</style>
