<template>
  <div>
    <el-table :data="booksResult?.books">
      <el-table-column prop="name" label="书名"/>
      <el-table-column prop="type" label="类型"/>
      <el-table-column prop="author.name" label="作者"/>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { useBooks } from './service/index'

const { result: booksResult } = useBooks()
</script>