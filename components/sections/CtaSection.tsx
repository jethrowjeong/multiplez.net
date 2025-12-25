'use client';

import { Container, Title, Text, Button, Stack, Box } from '@mantine/core';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function CtaSection() {
    return (
        <Box component="section" id="pricing" py={{ base: 80, md: 150 }} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Glow */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(255, 208, 40, 0.05) 0%, transparent 60%)', zIndex: 0 }} />

            <Container size="md" style={{ position: 'relative', zIndex: 1 }}>
                <Stack align="center" gap="xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Title
                            order={2}
                            ta="center"
                            c="white"
                            mb="md"
                            style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                        >
                            Ready to <span style={{ color: '#ffd028' }}>Scale?</span>
                        </Title>
                        <Text c="dimmed" ta="center" size="xl" mb={60} maw={600} mx="auto">
                            더 이상 추측하지 마세요. 데이터를 믿으세요.<br />
                            Multiplez가 당신의 글로벌 확장을 증명해드립니다.
                        </Text>
                    </motion.div>

                    <Stack gap="md" align="center" w="100%">
                        <Button
                            component="a"
                            href="https://calendar.app.google/i8KX8FBx8tonpQmb7"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="xl"
                            radius="full"
                            color="brand.5"
                            c="black"
                            fw={700}
                            rightSection={<IconArrowRight size={20} />}
                            styles={{
                                root: {
                                    height: 64,
                                    width: '100%',
                                    maxWidth: 400,
                                    fontSize: '1.2rem',
                                    boxShadow: '0 0 25px rgba(255, 208, 40, 0.3)'
                                }
                            }}
                        >
                            불안을 확신으로 바꾸는 방법 알아보기
                        </Button>
                        <Text size="sm" c="dimmed" mt={-10} mb="sm">
                            상담은 무료입니다. 약속은 진심입니다.
                        </Text>

                        <Button
                            component="a"
                            href="https://forms.gle/L6Tm6VBp3uWi67vD8"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="xl"
                            radius="full"
                            variant="subtle"
                            c="white"
                            fw={600}
                            rightSection={<IconCalendarEvent size={20} />}
                            styles={{
                                root: {
                                    height: 50,
                                    width: '100%',
                                    maxWidth: 400,
                                    '&:hover': { color: '#ffd028', backgroundColor: 'transparent' }
                                }
                            }}
                        >
                            파트너십 심사 신청
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
