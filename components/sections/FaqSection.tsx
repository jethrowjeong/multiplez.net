'use client';

import { Container, Title, Accordion, Box, ThemeIcon } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

export function FaqSection() {
    return (
        <Box component="section" id="faq" py={{ base: 80, md: 120 }}>
            <Container size="md">
                <Title
                    order={2}
                    ta="center"
                    mb={60}
                    c="white"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                    자주 묻는 질문
                </Title>

                <Accordion
                    variant="separated"
                    radius="lg"
                    styles={{
                        item: {
                            backgroundColor: 'rgba(19, 26, 19, 0.6)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            marginBottom: 16
                        },
                        control: {
                            padding: '24px',
                            color: 'white',
                            '&:hover': { backgroundColor: 'rgba(255,255,255,0.03)' }
                        },
                        label: { fontWeight: 600, fontSize: '1.1rem' },
                        content: { padding: '0 24px 24px 24px', lineHeight: 1.6, color: '#A6A7AB' },
                        chevron: { color: '#ffd028' }
                    }}
                    chevron={<IconPlus size={20} />}
                >
                    <Accordion.Item value="q1">
                        <Accordion.Control>결국 외주인데, 성공할까요?</Accordion.Control>
                        <Accordion.Panel>
                            Multiplez는 단순 대행사가 아닌 <strong>공동 창업자 마인드</strong>로 접근합니다.<br />
                            성공 보수 모델을 통해 우리의 목표와 고객의 목표를 일치시켰습니다.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="q2">
                        <Accordion.Control>틱톡에서 Amazon으로 가는 게 왜 중요한가요?</Accordion.Control>
                        <Accordion.Panel>
                            Amazon은 이미 레드오션입니다. <br />
                            틱톡에서 팬덤과 트래픽을 확보한 후 Amazon에 진입해야 상위 노출과 전환율 확보가 가능합니다.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="q3">
                        <Accordion.Control>비용은 어떻게 되나요?</Accordion.Control>
                        <Accordion.Panel>
                            초기 비용 부담을 줄이고, 성과가 났을 때 수익을 공유하는 구조입니다.<br />
                            자세한 내용은 무료 전략 상담을 통해 안내해 드립니다.
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </Box>
    );
}
