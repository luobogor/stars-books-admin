<template>
  <div>
    <el-button @click="showAddAuthorDialog">添加作者</el-button>
  </div>
  <div>
    <el-table :data="booksResult?.books">
      <el-table-column prop="name" label="书名"/>
      <el-table-column prop="type" label="类型"/>
      <el-table-column prop="author.name" label="作者"/>
    </el-table>
  </div>

  <el-dialog v-model="authorDialogVisible">
    <el-form :model="authorFormData">
      <el-form-item label="姓名">
        <el-input v-model="authorFormData.name"/>
      </el-form-item>

      <el-form-item label="性别">
        <el-radio-group v-model="authorFormData.gender">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="邮箱">
        <el-input v-model="authorFormData.email"/>
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button type="primary"
                 @click="onSubmitAuthor()">
        提交
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { useBooks, useAddAuthor, useAuthors } from './service/index'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const { result: booksResult } = useBooks()
const { result: authorsResult, refetch: refetchAuthors } = useAuthors()


const authorDialogVisible = ref(false)
const authorFormData = ref({})

const showAddAuthorDialog = () => {
  authorFormData.value = {}
  authorDialogVisible.value = true
}

const onSubmitAuthor = () => {
  const { mutate, onDone }  = useAddAuthor()
  mutate({
    createAuthorInput: {
      name: authorFormData.value.name,
      gender: authorFormData.value.gender,
      email: authorFormData.value.email
    }
  })

  onDone(() => {
    refetchAuthors()
    ElMessage.success('操作成功')
    authorDialogVisible.value = false
  })
}
</script>