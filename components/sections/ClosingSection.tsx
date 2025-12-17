'use client';

import { Container, Title, Text, Box, Anchor, Stack, Group } from '@mantine/core';

export function ClosingSection() {
    return (
        <Box component="section" py={{ base: 60, md: 100 }}>
            <Container size="md">
                <Stack align="center">
                    <Text
                        ta="center"
                        c="dimmed"
                        maw={700}
                        style={{ lineHeight: 1.8, fontSize: '1.1rem' }}
                    >
                        "3개월 후, 당신은 대형 유통사와의 거래를 시작할 수 있는 증거를 손에 쥐게 됩니다."<br />
                        <span style={{ color: 'white', fontWeight: 600 }}>Multiplez</span>
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}
